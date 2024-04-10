import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CPagination,
  CPaginationItem,
  CTable,
  CAvatar,
} from '@coreui/react'
import React from 'react'

import a from '../../../assets/images/avatars/1.jpg'

const Persons = () => {
  const columns = [
    {
      key: '_foto',
      label: 'Foto',
      _props: { scope: 'col' },
    },
    {
      key: '_nome',
      label: 'Nome completo',
      _props: { scope: 'col' },
    },
    {
      key: '_dataNascimento',
      label: 'Nascido em',
      _props: { scope: 'col' },
    },
    {
      key: '_funcao',
      label: 'Função',
      _props: { scope: 'col' },
    },
    {
      key: '_endereco',
      label: 'Endereco',
      _props: { scope: 'col' },
    },
    {
      key: '_contatos',
      label: 'Contatos',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      _foto: (
        <td>
          <CAvatar
            src={
              'https://criticalhits.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/12/a402f-16694231050443-1920-910x512.jpg.webp'
            }
          />
        </td>
      ),
      _nome: 'Mark',
      _dataNascimento: '07/09/1981',
      _funcao: 'professora',
      _endereco: 'rua fake de vasconcelos, 127, Bairro, Cidade, Estado',
      _contatos: '(22) 992433057',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      _foto: '2.jpg',
      _nome: 'Reanto',
      _dataNascimento: '07/09/1991',
      _funcao: 'Auxiliar',
      _endereco: 'rua fake de janerio, 127, Bairro, Cidade, Estado',
      _contatos: '(22) 992433123',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      _foto: '3.jpg',
      _nome: 'Renan',
      _dataNascimento: '07/09/1998',
      _funcao: 'Auxiliar',
      _endereco: 'rua fake de janerio, 127, Bairro, Cidade, Estado',
      _contatos: '(22) 9924331234',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Gestão de pessoas</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CTable striped columns={columns} items={items} />
      </CCardBody>
      <CCardFooter>
        <CPagination align="end">
          <CPaginationItem disabled>Anterior</CPaginationItem>
          <CPaginationItem active>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>Próximo</CPaginationItem>
        </CPagination>
      </CCardFooter>
    </CCard>
  )
}

export default Persons
