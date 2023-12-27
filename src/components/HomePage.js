import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  let navigate = useNavigate();
  const goToChat = () => {
    navigate(`/live-message/${props.userId}`);
  };
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          goToChat();
        }}
      >
        Chat
      </button>
    </div>
  );
};
export default HomePage;
