import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "../components/Table";

export default {
  title: "Editor/Table",
  component: Table,
  tags: ["autodocs"],
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

const columns = [
  {
    field: "item",
    title: "Item",
    width: 200,
    sortable: true,
    filterable: true,
  },
  {
    field: "categoria",
    title: "Categoria",
    width: 150,
    sortable: true,
    filterable: true,
  },
  {
    field: "preco",
    title: "Preço",
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: "disponibilidade",
    title: "Disponibilidade",
    width: 120,
    sortable: true,
    filterable: true,
    template: (row) => (
      <span
        className={`${
          row.disponibilidade === "Em Estoque"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {row.disponibilidade}
      </span>
    ),
  },
];

const dataSource = [
  {
    item: "Cheeseburguer",
    categoria: "Burgers",
    preco: "R$ 5,99",
    disponibilidade: "Em Estoque",
  },
  {
    item: "Batata Frita",
    categoria: "Acompanhamentos",
    preco: "R$ 2,99",
    disponibilidade: "Em Estoque",
  },
  {
    item: "Nuggets de Frango",
    categoria: "Acompanhamentos",
    preco: "R$ 4,99",
    disponibilidade: "Fora de Estoque",
  },
  {
    item: "Milkshake",
    categoria: "Bebidas",
    preco: "R$ 3,49",
    disponibilidade: "Em Estoque",
  },
  {
    item: "Salada Caesar",
    categoria: "Saladas",
    preco: "R$ 6,49",
    disponibilidade: "Em Estoque",
  },
];

export const ComponentTable = Template.bind({});
ComponentTable.args = {
  columns: columns,
  dataSource: dataSource,
  selectable: false,
  itemsPerPage: 4
};
