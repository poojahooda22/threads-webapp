'use server'

import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";


interface Params {
    text: string,
    author: string,
    community: string,
}