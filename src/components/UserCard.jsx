import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  if (!user) return null;

  const {
    _id,
    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl,
    skills,
  } = user;

  const handleSendRequest = async (status) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(_id));
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl p-5 ">
      <figure>
        <img
          src={photoUrl || "/default-avatar.png"}
          alt={`${firstName} profile`}
          className="rounded-xl object-cover h-75 w-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="text-sm text-gray-400">
            {age}, {gender}
          </p>
        )}

        {about && <p>{about}</p>}

        {Array.isArray(skills) && skills.length > 0 && (
          <div>
            <h3 className="font-semibold mt-2">Skills:</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-accent"
            onClick={() => handleSendRequest("ignored")}
          >
            Ignore
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested")}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
