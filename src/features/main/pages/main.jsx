import React from "react";
import { Layout } from 'antd';
// import '../index.scss';
import { Button } from 'antd';
import Head from '../../../components/Hearder';
import Futer from '../../../components/Footer';

import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;
 


function Main() {
  return (
    <div>
      <Head/>
      <div>
        hello
      </div>
      <Futer/>
    </div>
  );
}

export default Main;