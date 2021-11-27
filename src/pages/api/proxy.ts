import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import https from "https";

https.globalAgent.options.rejectUnauthorized = false;

const proxy = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = decodeURIComponent(req.query.url as string);

  const response: any = await axios.get(url, {
    responseType: "stream",
    headers: {
      referer: "nettruyen",
    },
  });

  response.data.pipe(res);
};

export default proxy;