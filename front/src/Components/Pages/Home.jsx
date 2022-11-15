import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import SliderText from '../SliderText/SliderText';


function Home() {
  return (
    <div>
      <MainLayout>
        <SliderText />
      </MainLayout>
    </div>
  );
}

export default Home;
