/* eslint-disable no-unused-expressions */
/* eslint-disable no-redeclare */
/* eslint-disable no-plusplus */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Select, SubmitButton } from './styles';

import Chart from '../../components/Chart/index';

export default function Main() {
  const [brands, setBrands] = useState([]);
  const [idBrands, setIdBrands] = useState(0);

  useEffect(() => {
    async function loadBrands() {
      const dataBrands = await api.get(`/brands`);

      setBrands(dataBrands.data);
    }

    loadBrands();
  }, []);

  async function filterBrand(id) {
    // const brandSelected = brands.filter(p => p.id === Number(idBrands));
  }

  return (
    <>
      <Container>
        <h1>USUÁRIOS INFLUENTES</h1>
        <div className="brandsbutton">
          <div className="brands">
            <h4>Brands</h4>
            <Select name="brands" onClick={e => setIdBrands(e.target.value)}>
              <option value={0}>Selecione</option>
              {brands.map(({ id, name }) => (
                <option value={id}>{name}</option>
              ))}
            </Select>
          </div>

          <SubmitButton type="submit" onClick={() => filterBrand(idBrands)}>
            Filtrar
          </SubmitButton>
        </div>
      </Container>
      <Chart />
    </>
  );
}
