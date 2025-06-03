import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className={cn('flex flex-col gap-6')}>
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Create an account</h1>
                      <p className="text-sm text-muted-foreground text-balance">
                        Enter your email below to create your account
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@gmail.com" required />
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input id="password" type="password" placeholder="******" required />
                    </div>

                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Confirm Password</Label>
                      </div>
                      <Input id="password" type="password" placeholder="******" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Signup
                    </Button>
                  </div>
                </form>
                <div className="bg-muted relative hidden md:block">
                  <Image
                    src="/bg-signup.avif"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    objectFit="cover"
                    alt="login_bg"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
