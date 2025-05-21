import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Login from '../components/login';
import SignUp from '../components/signup';
import { UrlState } from '../context/UrlContext';


const AuthPage = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAUTHENticated, loading } = UrlState();
  const longLink = searchParams.get("createNew");


  useEffect(() => {
    if (isAUTHENticated && !loading)
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
  }, [isAUTHENticated, loading, navigate]);

  return (
    <div className='mt-20 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold'>
        {searchParams.get("createNew") ? "Hold up! Let's login first..." : " Login / SignUp"}
      </h1>

      <Tabs defaultValue="login" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" className={"cursor-pointer"}>Login</TabsTrigger>
          <TabsTrigger value="signup" className={"cursor-pointer"}>SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default AuthPage;