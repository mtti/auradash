<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DashboardController extends Controller {

  /**
   * @Route("/dashboard")
   */
  public function dashboardController() {

    return $this->render(
      'dashboard/singlePageApp.html.twig',
      array()
    );

  }

}