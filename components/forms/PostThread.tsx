

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
  UserValidation
} from '@/lib/validations/user';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { Textarea } from '../ui/textarea';

import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';


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
      
      defaultValues: {
       thread: '',
       accountId: userId, 
      }
    })

    return <h1>Post Thread form</h1>
}

export default PostThread;