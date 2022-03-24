import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link} from "react-router-dom";
import { Spinner,Table,Modal,Button } from 'react-bootstrap';
const CampaignList = () => {
    
    const posts = useSelector((state) => state.posts);

    const [postData, setPostData] = useState({
        name: '',
        from: new Date(),
        to: new Date(),
        daily_budget: 0,
        total_budget: 0 , 
        images: []
    });

    const [campaignUploads, setCampaignUploads] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onPreview = (images) => {
        setCampaignUploads(JSON.parse(images));
        handleShow();
    }
    return (
        !posts.length ? 
            <Spinner animation="grow" /> 
        : (
        <div>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Budget</th>
                <th>Date</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
            {posts.map((post , i) => (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{post.name}</td>
                    <td>
                        Daily: {post.daily_budget} 
                        <br />
                        Total: {post.total_budget} 
                    </td>
                    <td>
                        From: {post.from} 
                        <br />
                        To: {post.to}     
                    </td>
                    <td>
                            <Link className="btn btn-sm btn-default" 
                            to={`add/${post.id}`}>Edit</Link>  
                            <Button variant="primary" className="btn btn-sm" 
                            onClick={(e) => onPreview(post.images)(e)}
                            >
                            Preview
                            </Button>
                    </td>
                </tr>
            ))}
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Creative Uploads</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {campaignUploads.map((file, i) => {
                        return(
                            <div className="col-md-4 mb-2">
                                <div className="thumbnail">
                                    <img alt="uploads" src={"storage/"+file} style={{width:"100%"}}/>
                                    <hr />
                                </div>
                            </div>
                        )
                    })}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
        )
      );
}

export default CampaignList;
