import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema.js";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  signup: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    //console.log(form.data)
    //Create acount with Supabase
    const supabase = event.locals.supabase;
    const { email, password } = form.data;
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.log(error)
      return setError(form, "password", "This account already exisits")
    } else {
      return redirect(303, "/private");
    }
  },
  login: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    console.log(form.data)
    //Create acount with Supabase
    const supabase = event.locals.supabase;
    const { email, password } = form.data;
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.log(error)
      return setError(form, "password", "Wrong Password/email")
    } else {
      return redirect(303, "/private");
    }
  },

};