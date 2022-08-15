import { getAuthRedirectUrl } from "../common/utils/getAuth";

const Index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <a target="_blank" href={getAuthRedirectUrl()} rel="noreferrer">
        Get Spotify Authorization
      </a>
    </div>
  );
};
export default Index;
