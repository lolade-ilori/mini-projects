import { UserType } from "../../@types/test";

interface Props {
  user: UserType | undefined;
}

const User = ({ user }: Props) => {
  return (
    <div className="searchresult-box">
      <>
        <div className="image-wrap">
          <img src="" alt="" />
        </div>

        <div className="result-name">{user?.name}</div>
      </>
    </div>
  );
};

export default User;
