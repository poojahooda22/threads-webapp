'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  
} from '@/components/ui/form';
import {
  UserValidation
} from '@/lib/validations/user';
import { zodResolver } from '@hookform/resolvers/zod';

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

const AccountProfile = ({ user, btnTitle}: Props) => {

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: '',
      name: '',
      username: '',
      bio: ''
    }
  })
  return (
    <Form>
      Account Profile
    </Form>
  )
}

export default AccountProfile;
