"use client";
import React from 'react'

import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';


interface Props {
        children: React.ReactNode; // Corrected spelling
        session: Session | null;   // Ensures session can be null or a Session object
    }
function SesionPro({ children, session }: Props)  {

    return (
                <Provider > {/* Pass the session prop to Provider */}
                    {children}
                </Provider>
            );
        }


export default SesionPro

// import React from 'react';
// import { Session } from 'next-auth';
// import { SessionProvider as Provider } from 'next-auth/react';

// interface Props {
//     children: React.ReactNode; // Corrected spelling
//     session: Session | null;   // Ensures session can be null or a Session object
// }

// function SessionProvider({ children, session }: Props) {
//     return (
//         <Provider > {/* Pass the session prop to Provider */}
//             {children}
//         </Provider>
//     );
// }

// export default SessionProvider;
