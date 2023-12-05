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
  CommentValidation, ThreadValidation
} from '@/lib/validations/thread';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Textarea } from '../ui/textarea';

// import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';
import { addCommentToThread, createThread } from '@/lib/actions/thread.actions';
// import { createThread } from '@/lib/actions/thread.actions';

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);


        form.reset();
    };

    return (
        <Form {...form}> 
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='comment-form'
        >
          <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem 
              className='flex items-center gap-3 w-full'>
              <FormLabel 
              className='text-base-semibold text-light-2'>
                <Image
                    src={currentUserImg}
                    alt="user"
                    width={42}
                    height={42}
                    className='rounded-full object-cover'
                />
              </FormLabel>
              <FormControl 
                className='border-none bg-transparent'>
                <Input
                  type="text"
                  placeholder='Comment...' 
                  className='no-focus text-light-1 outline-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit"
          className='comment-form_btn'
        >
          Reply
        </Button>
        </form>
      </Form>
    )
}

export default Comment; 