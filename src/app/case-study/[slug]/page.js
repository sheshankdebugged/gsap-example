import React from "react";
import Template1 from  '../../../components/case-templates/template1';
import Template2 from  '../../../components/case-templates/template2';
import Template3 from  '../../../components/case-templates/template3';
import Template4 from  '../../../components/case-templates/template4';

import { getData } from "../../../lib/getData"

export async function generateMetadata({ params }) {
  const caseStudyId = reteriveCaseStudyId(params);
  const result = await getData(`/user/get-public-single-case-study/${caseStudyId}`);
  const { data } = result;
  if (!data) return {
    title: 'Not found',
    description: "This page is not found"
  }

  return {
    title: data.title,
    description: data?.desc,
    openGraph: {
      title: 'test opengraph',
      description: 'Test desc opengraph',
    },
  }
}

function reteriveCaseStudyId(params) {
  const { slug } = params;
  const slugArr = slug.split("_");
  const id = slugArr[slugArr.length - 1];
  return id;
}

const CaseStudy = async ({ params }) => {
  const caseStudyId = reteriveCaseStudyId(params)
  const result = await getData(`/user/get-public-single-case-study/${caseStudyId}`);
  const { data } = result;
  // console.log('data-------', data)
  switch (data.templateId) {
    case 1:
      return <Template1 data={data} />
    case 2:
      return <Template2 data={data} />
    case 3:
      return <Template3 data={data} />
    case 4:
      return <Template4 data={data} />
    default:
      return <Template1 data={data}  />
  }
};

export default CaseStudy;
