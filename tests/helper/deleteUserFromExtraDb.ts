const tunnel = require('tunnel-ssh');
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

export async function deleteUserFromDb(oktaid: string) {

  const tunnelConfig = {
    host: 'test-bastion01a.test.gneis.io',
    port: 22,
    username: 'pawebro',
    privateKey: fs.readFileSync('C://Users//pbroda//.ssh//id_ed25519'),
    passphrase: 'PieknyLuty31',
  
  };

  return new Promise<void>((resolve, reject) => {
    try {
    tunnel.createTunnel(tunnelConfig, async (error:any, server:any) => {
      if (error) {
        console.error('SSH Tunnel Error:', error);
        reject(error);
        return;
      }
        else {
          console.log('SSH Tunnel established successfully');
        }
      // Create a PostgreSQL client using the tunnel

    //    const client = new Client({
    //     host: process.env.PGHOST,
    //     port: Number(process.env.PGPORT),
    //     user: process.env.PGUSER,
    //     password: process.env.PGPASSWORD,
    //     database: process.env.PGDATABASE,
    //   });

    //  try {
    //     await client.connect();
    //     await client.query('DELETE FROM member WHERE oktaid = "00u91n26c9BSc6Ng20x7"', [oktaid]);
    //     await client.end();
    //     server.close();
    //     resolve();
    //   } catch (err) {
    //     console.error('DB Error:', err);
    //     await client.end();
    //     server.close();
    //     reject(err);
    //   }
    
    });
  } catch (err) {
    console.error('Tunnel creation failed:', err);
    reject(err);
  }
  });
}