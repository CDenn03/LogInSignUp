"use client"

import {useState, useEffect} from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthImage from "@/components/auth/authImage"
import LoginForm from "@/components/auth/LoginForm"
import SignUpForm from "@/components/auth/SignUpForm"

export default function LoginPage({
  className,
  ...props
}) {

  const [isSignUp, setIsSignUp] = useState(false);

  // useEffect(()=>{
  //   const isSignUpData = sessionStorage.getItem('isSignUp');
  //   if(isSignUpData){
  //     console.log(JSON.parse(isSignUpData))
  //     setIsSignUp(JSON.parse(isSignUpData));
  //   }
  // },[isSignUp])

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden p-0">

            {isSignUp? 
            <CardContent className="grid p-0 md:grid-cols-2 transition-transform">
              <SignUpForm setIsSignUp={setIsSignUp}  /> 
              <AuthImage />
            </CardContent> 
                   :
             <CardContent className="grid p-0 md:grid-cols-2 transition-transform">
              <AuthImage />
               <LoginForm setIsSignUp={setIsSignUp}  /> 
            </CardContent>  }  
          </Card>    
        </div>
      </div>
    </div>
  );
}
