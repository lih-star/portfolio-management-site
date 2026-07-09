"use client";

import { useEffect, useState } from "react";
import { supabase } from '../../component/auth/supabaseClient';

export default function Page() {
    const [user,setUser] = useState<any>(null);
    const [events,setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data: data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

      if (error) {
        return <div>Error: {error.message}</div>;
      } 
      else {
        setEvents(data);
      }
    }

    const fetchUser = async () => {
      const user = await supabase.auth.getUser();
      setUser(user);
    }
    fetchEvents();
    fetchUser();
  }, []);

  console.log(user);
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events?.map((event) => (
          user.data.user?.email === event.user_email && (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>User: {event.user_email}</p>
          </li>
          )
        ))}
      </ul>
    </div>
  );
}
