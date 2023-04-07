import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Mockup from "../public/images/code-mockup.png";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { GithubLogo, GoogleLogo } from "phosphor-react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);

  const singInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log(res.user);
        toast.success(`Welcome ${res.user.displayName}.`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/watch");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Opps, Something went wrong");
        setAuthing(false);
      });
  };

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    toast.success(`Welcome ${name}.`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/watch");
  };

  return (
      <div className="min-h-screen bg-blurBlack bg-cover bg-no-repeat flex flex-col items-center">
        
        <div className="w-full-scren mx-auto md:flex items-center justify-between  md:mt-20 md:w-full max-w-[1100px] md:p-4">
          <div className="max-w-[90%] mx-auto mt-4 lg:max-w-[660px] p-4">
            <h1 className="text-[2.5rem] leading-tight text-purple-500">
              ARGO
            </h1>
            <h1 className=" mt-4 md:mt-8 text-[2.5rem] leading-tight">
              Welcome to <strong className="text-purple-500">ARGO </strong>a
              place where
              <strong className="text-purple-500">
                {" "}
                you see the most random stuff.
              </strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-base  text-xl text-justify text-distribute tracking-tight indent-4">
              This website was not made with the intention of growing, but with
              the intention of learning, so I don't give a damn about any
              copyright that you may find here.
            </p>
          </div>

          <div className="max-w-[80%] mx-auto mt-6 p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Escreva-se gratuitamente
            </strong>

            <form
              onSubmit={submitHandler}
              className="w-full flex flex-col gap-2"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                required
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                required
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                disabled={loading}
                type="submit"
                className="mt-4 py-4 font-bold rounded uppercase bg-purple-500 hover:bg-purple-700 transitio-colors disabled:opacity-50"
              >
                Cadastrar
              </button>

              <button
                onClick={() => singInWithGoogle()}
                disabled={authing}
                className="mt-4 py-4 font-bold rounded uppercase bg-red-600 flex gap-4 items-center justify-center hover:bg-red-700"
              >
                <GoogleLogo size={24} />
                Login with Google
              </button>

              {/* <button className='mt-4 py-4 font-bold rounded uppercase bg-black flex gap-4 items-center justify-center hover:bg-white hover:text-black'>
              <GithubLogo size={24} />
              Login with Github
            </button> */}
            </form>
          </div>
        </div>

        <img src={Mockup} className="mt-10" alt="mockup" />
      </div>
  );
}
