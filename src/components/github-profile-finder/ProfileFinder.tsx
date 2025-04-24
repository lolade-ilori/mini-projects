import { useEffect, useState } from "react";
import User from "./User";
import { UserType } from "../../@types/test";

const ProfileFinder = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [user, setUser] = useState<UserType>();

  const handleSearch = async () => {
    const res = await fetch(`https://api.github.com/users/${searchValue}`);

    const data = await res.json();

    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    if (searchValue.trim() && searchValue.trim().length > 2) {
      setBtnDisabled(false);
    }
  }, [searchValue]);

  return (
    <div className="profile-finder-page">
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Type in username"
          name="search-by-username"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button disabled={btnDisabled} onClick={handleSearch}>
          Search
        </button>
      </div>

      <User user={user} />
    </div>
  );
};

export default ProfileFinder;
