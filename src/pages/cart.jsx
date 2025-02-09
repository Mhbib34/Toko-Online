export default function CartPages() {
  return (
    <div className="md:px-48 px-10">
      <table className="w-full border-2 text-center">
        <thead className="">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sepatu</td>
            <td>100.000</td>
            <td>2</td>
            <td>200.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
