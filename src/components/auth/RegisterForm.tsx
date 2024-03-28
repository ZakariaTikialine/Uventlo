import Image from "next/image";
import shape1 from "../../../public/assets/authAssets/shape1.svg";
import logoWithText from "../../../public/assets/authAssets/logoWithText.svg";
import googleLogo from "../../../public/assets/authAssets/googleLogo.svg";
import Link from "next/link";
import FirstRegFrame from "./FisrtRegFrame";
import SecondRegFrame from "./SecondRegFrame";
import ThirdRegFrame from "./ThirdRegFrame";
import FinalRegFrame from "./FinalRegFrame";
function RegisterForm({
  currentFrame,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: Function;
}) {
  if (currentFrame == 0) {
    return (
      <FirstRegFrame
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
      />
    );
  } else if (currentFrame == 1 || currentFrame == 2) {
    return (
      <SecondRegFrame
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
      />
    );
  } else if (currentFrame == 3) {
    return (
      <ThirdRegFrame
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
      />
    );
  } else {
    return <FinalRegFrame />;
  }
}

export default RegisterForm;
