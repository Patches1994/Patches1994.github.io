import React from "react";
import "./style.css";


const Table = (props) => {
  return (
    <table className="products-table">
      <tr className="products-tr">
        <th colSpan={3} className="center empty"></th>
        <th colSpan={2} className="bold products-th">
          <b>
            Produk<span>t</span>
          </b>
        </th>
        <th colSpan={2} className="center bold products-th">
          <b>
            1991-199<span>2</span>
          </b>
        </th>
        <th className="bold products-th">
          <b>
            199<span>3</span>
          </b>
        </th>
        <th className="bold products-th">
          <b>
            199<span>4</span>
          </b>
        </th>
        <th className="bold products-th">
          <b>
            199<span>5</span>
          </b>
        </th>
      </tr>
      <tr className="products-tr">
        <td colSpan={3} rowSpan={2} className="center bold">
          <b>Tłuszcze</b>
        </td>
        <td colSpan={2} className="bold">
          <b>Masło</b>
        </td>
        <td colSpan={2} className="center">
          2390
        </td>
        <td colSpan={2}>1590</td>
        <td>1550</td>
      </tr>
      <tr className="products-tr">
        <td colSpan={2} className="bold">
          <b>Margaryna</b>
        </td>
        <td colSpan={2} className="center">
          1700
        </td>
        <td>980</td>
        <td>1150</td>
        <td>1320</td>
      </tr>
      <tr className="products-tr">
        <td colSpan={3} rowSpan={2} className="center bold">
          <b>Przetwory owocowe</b>
        </td>
        <td colSpan={2} className="bold">
          <b>Dżem</b>
        </td>
        <td className="center">750</td>
        <td className="center">840</td>
        <td colSpan={2} rowSpan={2}>
          200
        </td>
        <td>1150</td>
      </tr>
      <tr className="products-tr">
        <td colSpan={2} className="bold">
          <b>Marmolada tajska</b>
        </td>
        <td className="center">400</td>
        <td className="center">500</td>
        <td>820</td>
      </tr>
    </table>
  );
};

export default Table;
