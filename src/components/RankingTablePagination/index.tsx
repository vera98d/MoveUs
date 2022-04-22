import { FC, useEffect, useState } from "react";
import { NavigationButton, CurrentPageNumber, NavContainer } from "./styles";

interface Props {
  usersPerPage: number;
  numberOfAllUsers: number;
  currentPage: number;
  setCurrentPage: any;
}

const RankingTablePagination: FC<Props> = ({
  usersPerPage,
  numberOfAllUsers,
  currentPage,
  setCurrentPage }) => {
  const pageNumbers: number = Math.ceil(numberOfAllUsers / usersPerPage);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPreviousButton, setShowPreviousButton] = useState(false);

  const nextPage = (): void => {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (currentPage >= pageNumbers) {
      setShowNextButton(false);
    } else {
      setShowNextButton(true);
    }
    if (currentPage === 1) {
      setShowPreviousButton(false);
    } else {
      setShowPreviousButton(true);
    }
  }, [currentPage]);

  return (
    <NavContainer>
      <NavigationButton
        onClick={previousPage}
        enabled={showPreviousButton}
      >
        {"<"}
      </NavigationButton>

      <CurrentPageNumber>
        {currentPage}
      </CurrentPageNumber>

      <NavigationButton
        enabled={showNextButton}
        onClick={nextPage}
      >
        {">"}
      </NavigationButton>
    </NavContainer>
  );
};

export default RankingTablePagination;