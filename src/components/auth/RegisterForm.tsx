import Image from "next/image";
import shape1 from "../../../public/assets/authAssets/shape1.svg";
import logoWithText from "../../../public/assets/authAssets/logoWithText.svg";
import googleLogo from "../../../public/assets/authAssets/googleLogo.svg";
import Link from "next/link";
import FirstRegFrame from "./FisrtRegFrame";
import SecondRegFrame from "./SecondRegFrame";
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
  } else {
    return (
      <SecondRegFrame
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
      />
    );
  }
}

export default RegisterForm;
