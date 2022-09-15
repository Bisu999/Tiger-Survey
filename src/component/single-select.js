import { Button
    ,InputGroup, InputGroupText, Input } from 'reactstrap';


function SingleSelect() {
    return (
      
        <div className="question-container">
            <InputGroup>
                <InputGroup addonType="append">
                    <InputGroupText>?</InputGroupText>
                    </InputGroup>
                <Input placeholder="Your Question" />
            </InputGroup >
            
            <p className="option-text">Options</p>
            <InputGroup className="input-grp">
            <Input placeholder="Option 1" />
                <InputGroup addonType="append">
                <InputGroupText>+ -</InputGroupText>
        </InputGroup>
      </InputGroup>
      <br/>
      <InputGroup className="input-grp">
      
        <Input placeholder="Option 2" />
        <InputGroup addonType="prepend">
          <InputGroupText>+ -</InputGroupText>
        </InputGroup>
      </InputGroup>
      <div className="questions-buttons">
       <Button className="survey-main-btn">Add Question</Button>
         <Button className="survey-main-btn">Publish</Button>
      </div>
        </div>
            
    );
  }
  
  export default SingleSelect;