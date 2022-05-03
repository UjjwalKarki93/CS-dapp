import React, { useState } from 'react';
import { PdfUpload } from 'react-ipfs-uploader';
import swal from 'sweetalert';




const Tender = (props) => {
  const [pdfUrl, setPdfUrl] = useState('')
  const [target, setTarget] = useState('')
  const [min, setMin] = useState('')



  const submitHandler = async () => {
    alert('Are you sure to deploy your tender ?');
    const targetinWEI = props.web3.utils.toWei(target);
    const mininWEI = props.web3.utils.toWei(min);
    await props.contract.methods.registerTender(targetinWEI, mininWEI, pdfUrl).send({ from: props.account })
    swal({
      title: "Good job!",
      text: "successfuly created!",
      icon: "success",
      button: "Continue To Website",
    });
    setMin(" ")
    setTarget(" ")


  }
  return (
    <div className="ui container">

      <div className='tender_gen'>
        <h1 id="h2">Tender Generation</h1>


          <form className="ui form" type='submit'>

            <p></p>
            <div className="eight wide field">
              <label>Target (ETH) *</label>
              <input type="number" name="Target" placeholder="Target" onChange={(e) => setTarget(e.target.value)}></input>
            </div>
            <div className="eight wide field">
              <label>Minimum Contribution (ETH) *</label>
              <input type="number" name="Minimum Contribution" placeholder="Minimum Contribution" onChange={(e) => setMin(e.target.value)}></input>
            </div>
          </form>
          <p></p>
          <p>
            <b>Upload Your Protocol Pdf * </b>
          </p>
          <PdfUpload setUrl={setPdfUrl} />
          <p></p>
          <button className='ui button blue' onClick={submitHandler}>Create Tender</button>
          {console.log("account=", props.account)}
        </div>
    </div>
  );
}
export default Tender
