import { createClient } from "@supabase/supabase-js"
import {type SupabaseClient} from "@supabase/supabase-js";

export default class Supabase{

    private static client: SupabaseClient;
    private constructor(){}

    public static getInstance(): SupabaseClient{
        if(!Supabase.client){
            Supabase.client = createClient(
                process.env.SUPABASE_URL || '',
                process.env.SUPABASE_KEY || ''
            );
        }
        return Supabase.client;
    }
}