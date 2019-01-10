/**
 * Created by hao.cheng on 2017/4/14.
 */
import React, { Component } from 'react';
import { Form } from 'antd';
import { post_test } from '../../axios';

class NormalLoginForm extends Component {
    render() {
        return (
            <div>
                <button onClick={post_test}>get</button>
                <button>set</button>
            </div>
        );
    }
}

const Test = Form.create()(NormalLoginForm);

export default Test;