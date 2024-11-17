import PusherServer from "pusher";
import PusherClient from "pusher-js";

declare global {
  var pusherServer: PusherServer | undefined;
  var pusherClient: PusherClient | undefined;
}

export const pusherServer =
  global.pusherServer ||
  new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "sa1",
    useTLS: true,
  });

export const pusherClient =
  global.pusherClient ||
  new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: "sa1",
  });

//TODO: Em desenvolvimento, isso criará multiplas instancias do pusher
//TODO: o que pode fazer com que atinja o limite de conexões no nível gratuito

// export const pusherServer = new PusherServer({
//   appId: process.env.PUSHER_APP_ID!,
//   key: process.env.PUSHER_KEY!,
//   secret: process.env.PUSHER_SECRET!,
//   cluster: "sa1",
//   useTLS: true,
// });

// export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
//   cluster: "sa1",
// });
