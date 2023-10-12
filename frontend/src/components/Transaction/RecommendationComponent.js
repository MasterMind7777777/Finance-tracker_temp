import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTransactionRecommendations } from '../../api/transaction';
import { DetailComponent } from '../Common/Detail/DetailBase';

const RecommendationComponent = ({ numRecommendations }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [mostUsedCategory, setMostUsedCategory] = useState(null);

  useEffect(() => {
    getTransactionRecommendations(numRecommendations)
      .then((response) => {
        if (response) {
          setRecommendations(response.recommendations);
          setMostUsedCategory(response.most_used_category);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch transaction recommendations:', error);
      });
  }, [numRecommendations]);

  return (
    <div>
      <h2>
        Your transaction recommendations based on the most used category:{' '}
        {mostUsedCategory}
      </h2>
      {recommendations.map((recommendation, index) => (
        <DetailComponent
          key={index}
          entityTitle="Recommendation"
          fetchDetail={() => Promise.resolve(recommendation)}
          detailFields={[
            { key: 'title', label: 'Title' },
            { key: 'description', label: 'Description' },
            { key: 'amount', label: 'Amount' },
          ]}
        />
      ))}
    </div>
  );
};

RecommendationComponent.propTypes = {
  numRecommendations: PropTypes.number.isRequired,
};

export default RecommendationComponent;
