import { createClient } from "@/utils/supabase/server";

const page = async () => {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
};

export default page;
 