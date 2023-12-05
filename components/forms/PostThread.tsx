
'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  ThreadValidation
} from '@/lib/validations/thread';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Textarea } from '../ui/textarea';

import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';
import { createThread } from '@/lib/actions/thread.actions';
import path from 'path';


interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    }
    btnTitle: string; 
} 


function PostThread({ userId }: { userId: string}) {
    const router = useRouter();
    const pathname = usePathname();
  
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
       thread: '',
       accountId: userId, 
      }
    })

    const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
      await createThread({
        text: values.thread,
        author: userId,
        communityId: null,
        path: pathname
      });

      router.push("/");
    }

    return (
      <Form {...form}> 
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' mt-10 flex flex-col justify-start gap-10'
        >
          <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className='flex flex-col items-start gap-3 w-full'>
              <FormLabel className='text-base-semibold text-light-2'>
                Content
              </FormLabel>
              <FormControl 
                className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea
                  rows={15} 
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit"
          className='bg-primary-500'
        >
          Post Thread
        </Button>
        </form>
      </Form>
    )
}

export default PostThread;