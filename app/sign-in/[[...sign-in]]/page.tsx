import { SignIn } from "@clerk/nextjs";
import Spline from '@splinetool/react-spline/next';

export default function Page() {
    return (
        <div className="authentication_bg flex w-full h-full">
            <div className="dash_ref w-full h-full">

                <Spline
                    scene="https://prod.spline.design/c-MsmGH5w3dLKlbQ/scene.splinecode"
                />
            </div>
            <div className="signin w-full h-full flex justify-center items-center">
                <SignIn />
            </div>
        </div>
    );
}