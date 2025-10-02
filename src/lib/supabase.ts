import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PurchaseEvent {
  id?: string;
  user_email: string;
  event_type: string;
  value: number;
  currency: string;
  created_at?: string;
  user_agent?: string;
  ip_address?: string;
}

export async function logPurchaseEvent(email: string): Promise<boolean> {
  try {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const { data: recentEvent } = await supabase
      .from('purchase_events')
      .select('id, created_at')
      .eq('user_email', email)
      .gte('created_at', last24Hours.toISOString())
      .maybeSingle();

    if (recentEvent) {
      console.log('Purchase event already fired in last 24h for:', email);
      return false;
    }

    const eventData: PurchaseEvent = {
      user_email: email,
      event_type: 'Purchase',
      value: 10.00,
      currency: 'BRL',
      user_agent: navigator.userAgent,
    };

    const { error } = await supabase
      .from('purchase_events')
      .insert([eventData]);

    if (error) {
      console.error('Error logging purchase event:', error);
      return false;
    }

    console.log('Purchase event logged successfully for:', email);
    return true;
  } catch (error) {
    console.error('Error in logPurchaseEvent:', error);
    return false;
  }
}
