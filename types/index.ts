export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: "automotive" | "marine" | "aeronautical" | "other";
  vehicleDescription: string;
  message: string;
  location: string;
}

export interface ServiceArea {
  town: string;
  zip: string;
  type: string;
}
