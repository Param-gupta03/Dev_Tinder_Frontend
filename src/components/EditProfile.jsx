import axios from "axios";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";

const EditProfile = ({user}) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [age, setAge] = useState(user?.age || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(
    user?.skills ? user.skills.join(", ") : ""
  );

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setError("");
    try {
      

      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          gender,
          age,
          about,
          skills: skills.split(",").map((s) => s.trim()),
        },
        { withCredentials: true }
      );

       dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex justify-center">
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="card w-full max-w-2xl bg-base-300 shadow-2xl">
        <div className="card-body space-y-4">
          <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">First Name</label>
              <input
                className="input input-bordered w-full"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">Last Name</label>
              <input
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">Photo URL</label>
              <input
                className="input input-bordered w-full"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">Gender</label>
              <select
                className="select select-bordered w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">Age</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">About</label>
              <textarea
                className="textarea textarea-bordered w-full"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                Skills <span className="text-xs opacity-70">(comma separated)</span>
              </label>
              <input
                className="input input-bordered w-full"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
          </div>
          <p className="text-red-500">{error}</p>
          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4"><UserCard user={{ firstName, lastName, photoUrl, age, gender, about, skills: skills? skills.split(",").map((s) => s.trim()): [], }}/></div>
    {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default EditProfile;
