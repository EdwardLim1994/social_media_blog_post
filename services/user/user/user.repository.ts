import Supabase from "@lib/client/supabase.client";

export default class UserRepository{
    private constructor(private supabaseClient:Supabase){}

    public static init(): UserRepository{
        return new UserRepository(Supabase.getInstance());
    }

    public async getUser(){

    }
}