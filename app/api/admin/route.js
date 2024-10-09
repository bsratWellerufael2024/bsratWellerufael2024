import { connectToDatabase } from "@/app/lib/mysql";
export async function GET() {
    try{
        const db = await connectToDatabase();
        await db.end()
        return new Response(JSON.stringify({ success: true, data: "connected Succssfuly" }), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          });
    }
    catch(err){
        console.log(err)
    }
}