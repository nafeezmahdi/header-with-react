import Text from "./Text";
import Button from "./Button";
function Container() {
  return (
    <div className="container">
      <Text />
      <div>
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Container;
