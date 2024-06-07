/* eslint-disable react/prop-types */
import {
  CTable,
  CAvatar,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CProgress,
  CInputGroup,
  CButton,
  CFormInput,
  CTableFoot,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CContainer,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import React, { useState } from 'react'
import { cilSearch, cilPeople } from '@coreui/icons'

const Grid = (props) => {
  const { collumns, search, data } = props
  const [pageNumber, setPageNumber] = useState(1)
  const changePageNumber = (pageNumber) => setPageNumber(pageNumber)

  const options = {
    paging: {
      enabled: true,
      page: {
        pageSize: 5,
        pageNumbersCollection: (data, pageSize) => {
          const pagesNumber = Math.ceil(data.length / pageSize)
          const pages = []
          for (let i = 1; i <= pagesNumber; i++) {
            pages.push(i)
          }
          return pages
        },
      },
      paginate: (data, pageSize, pageNumber) =>
        data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
    },
  }

  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          {search.enabled && (
            <CTableHeaderCell scope="col" colSpan={collumns.length}>
              <CInputGroup size="sm" className="mb-3">
                <CFormInput
                  placeholder="Pesquisar"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <CButton type="button" color="secondary" variant="outline" id="button-addon1">
                  <CIcon icon={cilSearch} />
                </CButton>
              </CInputGroup>
            </CTableHeaderCell>
          )}
        </CTableRow>
        <CTableRow>
          {collumns.map((item, index) => (
            <CTableHeaderCell className={item.class ? item.class : 'text-center'} key={index}>
              {item.icon && <CIcon icon={cilPeople} />} {item.label}
            </CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>{props.children}</CTableBody>
      <CTableFoot>
        <CTableRow scope="col" colSpan={collumns.length}>
          {options.paging.enabled && (
            <CTableHeaderCell scope="col" colSpan={collumns.length}>
              <CContainer>
                <CRow>
                  <CCol className="justify-content-start" xs={10}>
                    <CPagination size="sm" align="start" aria-label="Paginação">
                      <CPaginationItem
                        aria-label="Anterior"
                        disabled={pageNumber === 1}
                        onClick={() => changePageNumber(pageNumber - 1)}
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </CPaginationItem>
                      {options.paging.enabled &&
                        options.paging.page
                          .pageNumbersCollection(data, options.paging.page.pageSize)
                          .map((item, index) => (
                            <CPaginationItem
                              active={pageNumber === item}
                              key={index}
                              onClick={() => changePageNumber(item)}
                            >
                              {item}
                            </CPaginationItem>
                          ))}
                      <CPaginationItem
                        aria-label="Próximo"
                        disabled={pageNumber === options.paging.page.pageNumbersCollection.length}
                        onClick={() => changePageNumber(pageNumber + 1)}
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </CPaginationItem>
                    </CPagination>
                  </CCol>
                  <CCol className="justify-content-end">
                    <CFormSelect
                      size="sm"
                      aria-label="Items por página"
                      options={[
                        'Items por página',
                        { label: '5', value: '1' },
                        { label: '10', value: '5' },
                        { label: '20', value: '20' },
                        { label: '50', value: '50' },
                        { label: '100', value: '100' },
                      ]}
                    />
                  </CCol>
                </CRow>
              </CContainer>
            </CTableHeaderCell>
          )}
        </CTableRow>
      </CTableFoot>
    </CTable>
  )
}
export default Grid
