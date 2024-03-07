import Layout from '@/components/Layout';
import Table from '@/components/Table';
import Client from '@/core/Client';

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4'),
  ];

  function editClient(client: Client) {
    console.log(client);
  }

  function deleteClient(client: Client) {
    console.log(client);
  }

  return (
    <div className="flex h-screen justify-center items-center bg-violet-950">
      <Layout title="Cadastro Simples">
        <Table clients={clients} deleteClient={deleteClient} editClient={editClient} />
      </Layout>
    </div>
  );
}
