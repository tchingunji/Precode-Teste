import { Client } from "../models/Client";
import axios from "./axios.config";

type ClientData = {
  id: string;
  attributes: {
    name: string;
    email: string;
    address: string;
  };
};

type ClientResponse = {
  data: ClientData;
};

type AllClientResponse = {
  data: ClientData[];
};

async function createClient(client: Client) {
  const requestData = {
    data: client,
  };
  try {
    const response = await axios.post("/clients", requestData);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

async function getClient(id: string) {
  try {
    const response = await axios.get<ClientResponse>(`/clients/${id}`);
    const client = mapToClient(response.data.data);
    return client;
  } catch (error) {
    console.error(error);
  }
}

async function getAllClients() {
  try {
    const response = await axios.get<AllClientResponse>("/clients");
    const clients = mapToClients(response.data);
    return clients;
  } catch (error) {
    console.error(error);
  }
}

async function getClientByEmail(email: string) {
  const allClients = await getAllClients();
  if (!allClients) return undefined;
  return allClients.find((client) => client.email === email);
}

function mapToClient(clientResponse: ClientData) {
  const { attributes, id } = clientResponse;
  const { address, email, name } = attributes;
  const newClient = new Client({
    address,
    email,
    id,
    name,
  });
  return newClient;
}

function mapToClients(clientsResponse: AllClientResponse) {
  return clientsResponse.data.map((client) => mapToClient(client));
}

export default {
  createClient,
  getClient,
  getAllClients,
  getClientByEmail,
};
