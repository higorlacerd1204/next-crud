import Client from '@/core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
  clients: Client[];
  editClient?: (client: Client) => void;
  deleteClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.editClient || props.deleteClient;

  function renderTableHead() {
    return (
      <tr>
        <th className="text-left p-3">Código</th>
        <th className="text-left p-3">Nome</th>
        <th className="text-right p-3">Idade</th>
        {showActions && <th className="text-center p-3">Ações</th>}
      </tr>
    );
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.editClient && (
          <button
            className="flex justify-center items-center text-yellow-500 rounded-full hover:bg-yellow-100 p-2 m-1"
            onClick={() => props.editClient?.(client)}
          >
            {EditIcon}
          </button>
        )}

        {props.deleteClient && (
          <button
            className="flex justify-center items-center text-red-500 rounded-full hover:bg-red-100 p-2 m-1"
            onClick={() => props.deleteClient?.(client)}
          >
            {TrashIcon}
          </button>
        )}
      </td>
    );
  }

  function renderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`} key={client.id}>
          <td className="text-left p-3">{client.id}</td>
          <td className="text-left p-3">{client.name}</td>
          <td className="text-right p-3">{client.age}</td>
          {showActions && renderActions(client)}
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-purple-900">{renderTableHead()}</thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
