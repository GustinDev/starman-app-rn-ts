export type TodaysDataProps = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

//Le decimos a TS los tipos que va a recibir cada Screen - View:
export type RootStackParams = {
  Home: undefined;
  Detail: TodaysDataProps;
};
