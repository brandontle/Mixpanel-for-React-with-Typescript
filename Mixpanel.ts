//@ts-ignore
import mixpanel from 'mixpanel-browser';
mixpanel.init('[YOUR MIXPANEL TOKEN GOES HERE');

let env_check = process.env.NODE_ENV === 'production';

let actions = {
  identify: (id: string) => {
    if(env_check) mixpanel.identify(id);
  },
  alias: (id: string) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name: string, props?: {[key:string]: any}) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props: {[key:string]: any}) => {
      if (env_check) mixpanel.people.set(props);
    },
    increment: (props: string | { [key:string]: number }, count?: number) => {
      if (env_check) mixpanel.people.set(props, count);
    }
  },
};

export let Mixpanel = actions;

