// types/store.ts
export interface Store {
    name: string;
    state: string;
    city: string;
    phone: string;
    full_address: string;
    latitude: string;
    longitude: string;
  }
  

  export interface Clinic {
    tags: never[];
    price_range: string;
    name: string;
    description: string;
    about: string;
    site: string;
    phone: string;
    full_address: string;
    street: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    status: string; // From "Business _ Status"
    reviews: string;
    logo: string;
    photo: string;
    postal_code: string;
    street_view: string;
    working_hours: string; // JSON string, could be parsed into a record
    reservation_links?: string;
    booking_appointment_link: string;
    before_and_after_photo?: string;
  }

  export interface StateCard {
  title: string,
  locations: number,
  services: number,
  backgroundImage: string,
  link: string,
  }

  export interface CityServiceCardProps {
    image: string;
    city: string;
    state: string;
    servicesCount: number;
  }
